package com.tomato.donghang.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EduApplyBoardMemberCountVO {
	private long memberCountId;
    private int memberCount;
    private MemberVO memberVO;
    private EduApplyBoardVO eduApplyBoardVO;
}
