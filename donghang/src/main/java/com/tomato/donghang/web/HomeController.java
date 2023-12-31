package com.tomato.donghang.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.UIView;

@ResponseBody
@Controller
public class HomeController {
	@GetMapping("/")
	public View Home() {
		return new UIView("ui/index.clx");
	}
	@PostMapping("ui/apply")
	public String apply(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		String menu= request.getParameter("menu");
		return menu;		
		
	}
	@GetMapping("ui/toBaordList.do")
	public View shome(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("ui/eduApplyboardList.clx");
	}
}
