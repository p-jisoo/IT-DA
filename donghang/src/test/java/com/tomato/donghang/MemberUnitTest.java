package com.tomato.donghang;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

@SpringBootApplication
public class MemberUnitTest {
	@Autowired
	private MemberMapper memberMapper;
	
	@Test
	public void registerMember() {
	MemberVO vo=new MemberVO("java" ,"a", "안산", "010-8299-1244", "강재헌", "옥탑방고양이");
	int result = memberMapper.registerMember(vo);
	Assertions.assertEquals(1, result);
	
	
			
		
		
	}
}
