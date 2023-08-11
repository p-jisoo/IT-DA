package com.tomato.donghang.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
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
		log.info("도착");
		return new UIView("ui/registerMember.clx");
	}
	@PostMapping("ui/registerMember")
	public View registerMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest,MemberVO vo) {
		ParameterGroup data=dataRequest.getParameterGroup("dm1");
		log.info("a");
		memberMapper.registerMember(data);
		return new UIView("/");
		
	}
}

