package com.tomato.donghang.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
public class HomeController {
	@GetMapping("/")
	public View Home() {
		return new UIView("ui/index.clx");
	}
}
