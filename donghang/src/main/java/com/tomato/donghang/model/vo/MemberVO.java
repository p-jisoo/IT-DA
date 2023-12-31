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
	private String email;
	//private String email;
	public MemberVO(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	public MemberVO(String userId) {
		super();
		this.userId = userId;
	}
	
}
