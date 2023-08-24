package com.tomato.donghang;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;

import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@SpringBootTest
public class MemberUnitTest {
	@Autowired
	private MemberMapper memberMapper;

	@Test
	public void registerMember() {
		MemberVO vo = new MemberVO("kkkkhdhh", "a", "오리", "01082991244", "강재헌", "아오재헌시치","gjsdks124@naver.com");
		memberMapper.registerMember(vo);
		log.info("회원가입 테스트 {} =", vo);
//		Assertions.assertEquals(10, );
	}

	@Test 
	void loginMember() { 
		String id="java";
		String password="a";
		MemberVO vo= new MemberVO(id,password);
		MemberVO memberVO=memberMapper.loginMember(vo);
		Assertions.assertEquals(vo.getUserId(), memberVO.getUserId());
	}

	
	@Test
	public void updateMember() {
		MemberVO vo = new MemberVO("gjsdms1244", "a", "오리", "01082991244", "강재헌", "아오재헌시치","kk@gmail.com");
		memberMapper.updateMember(vo);
		log.info("회원가입 테스트 {} =", vo);
	}
	}
	/*
	 * @Test public void checkIdMember() { String id="java"; List<MemberVO> list =
	 * memberMapper.checkIdMember(id); for(e) {
	 * 
	 * } }
	 */

