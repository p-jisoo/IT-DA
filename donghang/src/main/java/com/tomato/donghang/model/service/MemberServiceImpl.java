package com.tomato.donghang.model.service;

import org.springframework.stereotype.Service;

import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;

	@Override
	public String findIdByNameAndEmail(MemberVO memberVO) {
		log.info("memberVO {}",memberVO);
		return memberMapper.findIdByNameAndEmail(memberVO);
	}

}
