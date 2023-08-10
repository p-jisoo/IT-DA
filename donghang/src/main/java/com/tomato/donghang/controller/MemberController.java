package com.tomato.donghang.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.cleopatra.protocol.data.DataRequest;
import com.tomato.donghang.model.mapper.MemberMapper;

import lombok.Data;



@Controller
@Data
public class MemberController {
	@Autowired
	private MemberMapper memberMapper;
	
	@PostMapping("updateMember")
	public String updateMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		
		return null;
		
	}
}

