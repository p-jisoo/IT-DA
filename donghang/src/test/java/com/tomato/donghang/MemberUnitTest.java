package com.tomato.donghang;

import java.util.Iterator;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;

import com.cleopatra.protocol.data.DataRequest;
import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

@SpringBootTest
public class MemberUnitTest {
	@Autowired
	private MemberMapper memberMapper;

	@Test
	public void registerMember() {
		MemberVO vo = new MemberVO("java", "a", "오리", "01082991244", "강재헌", "아오재헌시치");
		int result = memberMapper.registerMember(vo);
		Assertions.assertEquals(10, result);
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
		MemberVO vo = new MemberVO("java", "a", "오리", "01082991244", "강재헌", "아오재헌시치");

	}
	/*
	 * @Test public void checkIdMember() { String id="java"; List<MemberVO> list =
	 * memberMapper.checkIdMember(id); for(e) {
	 * 
	 * } }
	 */
}
