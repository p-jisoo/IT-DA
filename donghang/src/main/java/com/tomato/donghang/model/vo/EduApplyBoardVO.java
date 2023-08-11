package com.tomato.donghang.model.vo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class EduApplyBoardVO {
	private long boardNo;
	private String boardTitle;
	private String boardContent;
	private String category;
//	private String applyStatus;
//	private String memberVO;
}
