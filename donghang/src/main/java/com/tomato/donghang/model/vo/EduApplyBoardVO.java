package com.tomato.donghang.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EduApplyBoardVO {
	 private long eduBoardNo;
	    private String eduBoardTitle;
	    private String eduBoardStartPeriod;
	    private String eduBoardEndPeriod;
	    private String eduBoardApplyStartPeriod;
	    private String eduBoardApplyEndPeriod;
	    private int eduBoardMaxMemberCount;
	    private String eduBoardAddress;
	    private String eduBoardCategory;
	    private String eduBoardContent;
	    private String eduBoardStatus;
	    private MemberVO memberVO;
}