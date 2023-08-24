package com.tomato.donghang.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;
import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class MemberController {
	@Autowired
	private MemberMapper memberMapper;

	@GetMapping("ui/register.do")
	public View register(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("ui/registerMember.clx");
	}

	@PostMapping("ui/registerMember")
	public View registerMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String id = data.getValue("userId");
		String password = data.getValue("password");
		String address = data.getValue("address");
		String userTel = data.getValue("userTel");
		String userName = data.getValue("userName");
		String nickName = data.getValue("nickName");
		String email = data.getValue("email");
		System.out.println(id + " " + password);
		MemberVO vo = new MemberVO(id, password, address, userTel, userName, nickName, email);
		log.info("회원가입한 정보 {}" + vo);
		memberMapper.registerMember(vo);

		Map<String, Object> map = new HashMap<>();// map 선언
		map.put("registerSuccess", "true"); // map에 key(registerSucess)와 value의 true값을 넣어줍니다.
		dataRequest.setMetadata(true, map); // 여기에 map이 꼭들어가야함. value자리에 map을 꼭 넣어줘야한다!!

		return new JSONDataView();

	}

	@GetMapping("ui/login")
	public View login() {
		return new UIView("ui/loginMember.clx");

	}

	// 로그인 기능
	@PostMapping("ui/loginMember")
	public View loginMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("dm1");
		String result=null;
		String id = data.getValue("user_id");
		String password = data.getValue("password");
		MemberVO memberVO = new MemberVO(id, password);
		// System.out.println("id="+id+"password"+password);
		MemberVO vo = memberMapper.loginMember(memberVO);
		// System.out.println(vo);
		if (vo != null) {
			HttpSession session = request.getSession();
			session.setAttribute("mvo", vo);
			dataRequest.setResponse("ds_member", vo);
			result="success";
		}else{
			result="fail";
		}
		dataRequest.setResponse("result", result);
		return new JSONDataView();
	}

	// 회원정보 수정 기능
	@PostMapping("ui/updateMember")
	public View updateMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("mvo") == null) {
			System.out.println("로그인 상태가 아니므로 탈퇴 불가");
		} else {
			ParameterGroup data = dataRequest.getParameterGroup("dm1");
			String id = data.getValue("userId");
			String password = data.getValue("password");
			String address = data.getValue("address");
			String userTel = data.getValue("userTel");
			String userName = data.getValue("userName");
			String nickName = data.getValue("nickName");
			String email = data.getValue("email");
			System.out.println("입력된값 = " + id + "," + password + "," + address + "," + "," + userTel + "," + userName
					+ "," + nickName + "," + email);

			MemberVO mvo = (MemberVO) session.getAttribute("mvo");
			System.out.println("업데이트 전 = " + mvo);
			MemberVO vo = new MemberVO(mvo.getUserId(), password, address, userTel, userName, nickName, email);
			System.out.println("업데이트 후 = " + vo);
			memberMapper.updateMember(vo);
			session.setAttribute("mvo", vo);
			
//			Map<String, Object> map =new HashMap<>();
//			map.put("updateSuccess", true);
//			dataRequest.setMetadata(true, map);
			
		}
		return new JSONDataView();
	}

	// 아이디 중복체크 기능
	@PostMapping("ui/checkIdMember")
	public View checkIdMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup data = dataRequest.getParameterGroup("CheckId");
		String id = data.getValue("userId");
		String findId = null;
		MemberVO vo = memberMapper.checkIdMember(id);
		if (vo == null) {
			findId = "null";
		} else {
			findId = vo.getUserId();
		}
		Map<String, Object> map = new HashMap<>();
		map.put("checkId", findId);
		dataRequest.setMetadata(true, map);
		return new JSONDataView();
	}

	// 세션값 확인 기능
	@PostMapping("ui/loginSessionMember")
	public View loginSession(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			return new JSONDataView();
		} else {
			MemberVO vo = (MemberVO) session.getAttribute("mvo");
			String id = vo.getUserId();
			MemberVO mvo = memberMapper.selectIdMember(id);
			if (vo != null) {
				dataRequest.setResponse("loginSession", mvo);
			}
			return new JSONDataView();
		}
	}

	// 로그아웃 기능 구현
	@PostMapping("ui/logoutMember")
	public View logoutMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequset) {
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
		}
		return new JSONDataView();
	}

	// 회원 탈퇴 기능
	@PostMapping("ui/deleteMember")
	public View deleteMember(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		String result = "fail";
		if (session == null || session.getAttribute("mvo") == null) {
			System.out.println("로그인 상태가 아니므로 탈퇴 불가");
		} else {
			ParameterGroup data = dataRequest.getParameterGroup("deletePassword");// 비밀번호 요청을 받아야함
			String password = data.getValue("PASSWORD");
			MemberVO mvo = (MemberVO) session.getAttribute("mvo");
			String pwd = mvo.getPassword();
			String userId = mvo.getUserId();
			if (pwd.equals(password)) {
				memberMapper.deleteMember(userId, password);
				session.invalidate();
				log.info("세션지워지고 회원탈퇴");
				result = "success";
			} 
		}
		dataRequest.setResponse("result", result);
		return new JSONDataView();

	}

	// 비밀번호 찾기 첫번째 페이지(아이디 인증)
	@PostMapping("ui/selectIdMember")
	public View selectIdMember(DataRequest dataRequset, HttpServletRequest request, HttpServletResponse reponse) {
		ParameterGroup data = dataRequset.getParameterGroup("CheckId");
		String id = data.getValue("userId");
		System.out.println("컬럼value값 확인 =" + id);
		MemberVO vo = memberMapper.selectIdMember(id);
		System.out.println("아이디 존재함 = " + vo);
		if (vo != null) {
		} else {
			return new UIView("ui/index.clx");
		}
		return new JSONDataView();

	}

}
