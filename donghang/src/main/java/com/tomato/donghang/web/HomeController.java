package com.tomato.donghang.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
public class HomeController {
	@GetMapping("/")
	public View Home() {
		return new UIView("ui/index.clx");
	}
	@PostMapping("ui/apply")
	public View apply() {
		System.out.println("1");
		return new UIView("ui/apply.clx");		
		// 왜 안나오는거임 끼잉끼잉
	}
}
