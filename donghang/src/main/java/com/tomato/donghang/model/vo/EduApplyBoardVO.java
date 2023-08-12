package com.tomato.donghang.model.vo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class EduApplyBoardVO {
	private long eboardNo;
    private String eduBoardTitle;
    private String eduBoardStartPeriod;
    private String eduBoardEndPeriod;
    private String eduBoardApplyStartPeriod;
    private String eduBoardApplyEndPeriod;
    private int eduBoardApplyMemberCount;
    private String eduApplyBoardStatus;
    private String eduApplyBoardCategory;
    private String eduApplyBoardContent;
    
}
