package com.tomato.donghang.controller;

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

	@GetMapping("ui/register")
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

	@PostMapping("ui/loginMember")
	public View loginMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String id = data.getValue("user_id");
		String password = data.getValue("password");
		MemberVO memberVO=new MemberVO(id,password);
		System.out.println("id="+id+"password"+password);
		MemberVO vo = memberMapper.loginMember(memberVO);
		System.out.println(vo);
		if (vo != null) {
			HttpSession session =request.getSession();
			session.setAttribute("mvo", vo);
			dataRequest.setResponse("ds_member", vo);
		
		}
		return new JSONDataView();
	}

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
}
