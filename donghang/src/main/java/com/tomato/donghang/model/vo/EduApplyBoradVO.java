package com.tomato.donghang.model.vo;

import lombok.Data;

@Data
public class EduApplyBoradVO {
	private long boardNo;
	private String boardTitle;
	private String boardContent;
	private String category;
	private String applyStatus;
	private String memberVO;
}
