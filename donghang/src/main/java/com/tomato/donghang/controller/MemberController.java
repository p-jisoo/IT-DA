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

	// 로그인 기능
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

	// 회원정보 수정 기능
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

	// 아이디 중복체크 기능
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

	// 세션값 확인 기능
	@PostMapping("ui/loginSessionMember")
	public View loginSession(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		MemberVO vo = (MemberVO) session.getAttribute("mvo");
		System.out.println("로그인 후=" + vo);
		if (vo != null) {
			dataRequest.setResponse("loginSession", vo);
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

	// 메인화면에 세션값이 들어와 있을 때 " 000 님 환영합니다 " 을 보여주기위한 기능
	@PostMapping("ui/whoName")
	public View whoName(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);//
		MemberVO vo = (MemberVO) session.getAttribute("mvo");
		String name = vo.getUserName();
		System.out.println("**************************************");
		System.out.println("로그인 후 유저 이름 세션값 ==" + name);
		System.out.println("**************************************");
		Map<String, String> datamap = new HashMap<>();
		datamap.put("userName", name);
		if (name != null) {
			dataRequest.setResponse("dm1", datamap);
		}
		return new JSONDataView();
	}

	// 회원 탈퇴 기능
	@PostMapping("ui/deleteMember")
	public View deleteMember(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("mvo") == null) {
			System.out.println("로그인 상태가 아니므로 탈퇴 불가");
		} else  {
			ParameterGroup data = dataRequest.getParameterGroup("deletePassword");// 비밀번호 요청을 받아야함
			MemberVO vo1=(MemberVO) session.getAttribute("mvo");
			String pwd=vo1.getPassword();
			System.out.println("******************");
			System.out.println("비밀번호 세션 값 ==" + pwd);
			System.out.println("******************");
			Map<String,String> datamap=new HashMap<>();
			datamap.put("PASSWORD", pwd);
			dataRequest.setResponse("deletePassword", datamap);	
			String password = data.getValue("PASSWORD");
			memberMapper.deleteMember(password);		
			
		}
			return new JSONDataView();
	}
}