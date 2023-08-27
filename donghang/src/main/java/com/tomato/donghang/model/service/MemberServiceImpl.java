package com.tomato.donghang.model.service;

import org.springframework.stereotype.Service;

import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;

	@Override
	public String findIdByNameAndEmail(MemberVO memberVO) {
		return memberMapper.findIdByNameAndEmail(memberVO);
	}

}
