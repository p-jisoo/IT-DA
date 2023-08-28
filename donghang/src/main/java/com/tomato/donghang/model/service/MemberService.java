package com.tomato.donghang.model.service;

import com.tomato.donghang.model.vo.MemberVO;

public interface MemberService {
	String findIdByNameAndEmail(MemberVO memberVO);
}