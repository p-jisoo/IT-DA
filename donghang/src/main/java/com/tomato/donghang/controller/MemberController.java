package com.tomato.donghang.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;
import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

import ch.qos.logback.core.recovery.ResilientSyslogOutputStream;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class MemberController {
	@Autowired
	private MemberMapper memberMapper;

	@GetMapping("ui/register.do")
	public View register(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("ui/registerMember.clx");
	}

	@PostMapping("ui/registerMember")
	public View registerMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String id = data.getValue("userId");
		String password = data.getValue("password");
		String address = data.getValue("address");
		String userTel = data.getValue("userTel");
		String userName = data.getValue("userName");
		String nickName = data.getValue("nickName");
		MemberVO vo = new MemberVO(id, password, address, userTel, userName, nickName);
		log.info("a");
		memberMapper.registerMember(vo);

		return new JSONDataView();

	}

	@GetMapping("ui/login")
	public View login() {
		return new UIView("ui/loginMember.clx");

	}

	// 로그인
	@PostMapping("ui/loginMember")
	public View loginMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String id = data.getValue("user_id");
		String password = data.getValue("password");
		MemberVO memberVO = new MemberVO(id, password);
		// System.out.println("id="+id+"password"+password);
		MemberVO vo = memberMapper.loginMember(memberVO);
		// System.out.println(vo);
		if (vo != null) {
			HttpSession session = request.getSession();
			session.setAttribute("mvo", vo);
			dataRequest.setResponse("ds_member", vo);

		}
		return new JSONDataView();
	}

	// 회원정보 수정
	@PostMapping("ui/updateMember")
	public View updateMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String id = data.getValue("userId");
		String password = data.getValue("password");
		String address = data.getValue("address");
		String userTel = data.getValue("userTel");
		String userName = data.getValue("userName");
		String userNick = data.getValue("userNick");
		MemberVO vo = new MemberVO(id, password, address, userTel, userName, userNick);
		memberMapper.updateMember(vo);
		if (vo != null) {
			session.setAttribute("mvo", vo);
		}
		return new JSONDataView();
	}

	// 아이디 중복체크
	@PostMapping("ui/checkIdMember")
	public View checkIdMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("CheckId");
		String id = data.getValue("userId");
		String findId = null;
		MemberVO vo = memberMapper.checkIdMember(id);
		if (vo == null) {
			findId = "null";
		} else {
			findId = vo.getUserId();
		}
		Map<String, Object> map = new HashMap<>();
		map.put("checkId", findId);
		dataRequest.setMetadata(true, map);
		return new JSONDataView();
	}

	// 세션값 확인
	@PostMapping("ui/loginSessionMember")
	public View loginSession(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		MemberVO vo = (MemberVO) session.getAttribute("mvo");
		System.out.println("로그인 후=" + vo);
		if (vo != null) {
			dataRequest.setResponse("loginSession", vo);
			System.out.println(session);
		}
		return new JSONDataView();
	}

	//
	@PostMapping("ui/logoutMember")
	public View logoutMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequset) {
		HttpSession session = request.getSession(false);
		if (session != null || session.getAttribute("mvo") != null) {
			session.invalidate();
		
		}
		return new JSONDataView();
	}
}