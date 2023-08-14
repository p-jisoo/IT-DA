package com.tomato.donghang.model.vo;

import lombok.Data;

@Data
public class CommentBoardVO {
	private long commentNo;
	private String contentComment;
	private MemberVO memberVO;
	private EduApplyBoardVO eduApplyBoradVO;
}
