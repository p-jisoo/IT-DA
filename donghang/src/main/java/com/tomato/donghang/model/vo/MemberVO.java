package com.tomato.donghang.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberVO {
	private String userId;
	private String password;
	private String address;
	private String userTel;
	private String userName;
	private String nickName;
	public MemberVO(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	
}
