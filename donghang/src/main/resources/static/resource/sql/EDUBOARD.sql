drop table EDU_APPLY_COMMENT_BOARD
DROP TABLE

CREATE TABLE EDU_APPLY_COMMENT_BOARD(
--코멘트 번호
EDU_APPLY_COMMENT_BOARD_NO NUMBER,
--코멘트 내용
EDU_APPLY_COMMENT_CONTENT VARCHAR2(100),
--게시판 번호
EDU_BOARD_NO NUMBER,
--사용자 아이디
USER_ID  VARCHAR2(30),
CONSTRAINT EDU_APPLY_COMMENT_BOARD PRIMARY KEY (EDU_APPLY_COMMENT_BOARD_NO),
CONSTRAINT FK_EDU_COMMENT_USER_ID FOREIGN KEY (USER_ID)
REFERENCES MEMBER(USER_ID) ON DELETE CASCADE,
CONSTRAINT FK_EDU_COMMENT_EDU_BOARD_NO FOREIGN KEY (EDU_BOARD_NO)
REFERENCES EDU_APPLY_BOARD(EDU_BOARD_NO) ON DELETE CASCADE
)
select * from MEMBER;
select * from like_board;
select count(*) from EDU_APPLY_BOARD
select * from EDU_APPLY_COMMENT_BOARD
CREATE SEQUENCE EDU_APPLY_COMMENT_BOARD_SEQ;
drop SEQUENCE EDU_APPLY_COMMENT_BOARD_SEQ;
insert into EDU_APPLY_COMMENT_BOARD(
EDU_APPLY_COMMENT_BOARD_NO,
EDU_APPLY_COMMENT_CONTENT,
EDU_BOARD_NO,
USER_ID
)
VALUES(
EDU_APPLY_COMMENT_BOARD_SEQ.NEXTVAL,
'EDU_APPLY_COMMENT_CONTENTEDU_APPLY_COMMENT_CONTENT',
1111,
'1234'
)


CREATE TABLE EDU_APPLY_BOARD(
EDU_BOARD_NO NUMBER,
--교육 제목
EDU_BOARD_TITLE VARCHAR2(100),
--교육기간
--시작
EDU_BOARD_START_PERIOD DATE,
--마감
EDU_BOARD_END_PERIOD DATE, 
--모집기간
--시작
EDU_BOARD_APPLY_START_PERIOD DATE,
--마감
EDU_BOARD_APPLY_END_PERIOD DATE,
-- 모집 최대 인원
EDU_BOARD_MAX_MEMBER_COUNT NUMBER,
--교육주소
EDU_BOARD_ADDRESS VARCHAR2(100),
--교육분야
EDU_BOARD_CATEGORY VARCHAR2(50),
--게시판내용
EDU_BOARD_CONTENT CLOB,
--게시판 모집 상태
EDU_BOARD_STATUS DEFAULT '모집중',
--사용자 아이디
USER_ID  VARCHAR2(30),
CONSTRAINT PK_EDU_APPLY_BOARD PRIMARY KEY (EDU_BOARD_NO),
CONSTRAINT FK_EDU_APPLY_BOARD_MEMBER FOREIGN KEY (USER_ID)
REFERENCES MEMBER(USER_ID) ON DELETE CASCADE
)

ALTER TABLE EDU_APPLY_BOARD modify BOARD_NO DEFAULT EDU_APPLY_BOARD_SEQ.NEXTVAL

INSERT INTO EDU_APPLY_BOARD(
EDU_BOARD_NO,
EDU_BOARD_TITLE,
EDU_BOARD_START_PERIOD,
EDU_BOARD_END_PERIOD, 
EDU_BOARD_APPLY_START_PERIOD,
EDU_BOARD_APPLY_END_PERIOD,
EDU_BOARD_MAX_MEMBER_COUNT,
EDU_BOARD_ADDRESS,
EDU_BOARD_CATEGORY,
EDU_BOARD_CONTENT,
USER_ID
)
 VALUES(
 EDU_APPLY_BOARD_SEQ.NEXTVAL,
'EDU_BOARD_TITLE',
'20240101',
'20240201',
'20240101',
'20240201',
'100',
'서울서울',
'EDU_BOARD_CONTENT',
'EDU_BOARD_CATEGORY',
'b'
);
UPDATE EDU_APPLY_BOARD 
SET
EDU_BOARD_TITLE ='수정제목111',
EDU_BOARD_START_PERIOD='2023-02-01',
EDU_BOARD_END_PERIOD='2023-03-01', 
EDU_BOARD_APPLY_START_PERIOD='2023-02-01',
EDU_BOARD_APPLY_END_PERIOD='2023-03-01',
EDU_BOARD_ADDRESS='서울서울',
EDU_BOARD_CATEGORY='수정카테고리',
EDU_BOARD_CONTENT='수정내용'
WHERE EDU_BOARD_NO='1'
ALTER session set NLS_DATE_FORMAT = 'YYYY-MM-DD'


INSERT INTO COMMENTBOARD(COMMENT_NO,CONTENTCOMMENT,USER_ID,BOARD_NO)
VALUES(COMMENTBOARD_SEQ.NEXTVAL,'CONTENTCOMMENT','ID',2);

CREATE SEQUENCE EDU_APPLY_BOARD_SEQ;
drop SEQUENCE EDU_APPLY_BOARD_SEQ;

COMMIT

DROP TABLE EDU_APPLY_BOARD;

SELECT * FROM EDU_APPLY_BOARD
where EDU_BOARD_NO=3;
SELECT EDU_BOARD_NO,
EDU_BOARD_TITLE,
EDU_BOARD_START_PERIOD,
EDU_BOARD_END_PERIOD, 
EDU_BOARD_APPLY_START_PERIOD,
EDU_BOARD_APPLY_END_PERIOD,
EDU_BOARD_MAX_MEMBER_COUNT,
EDU_BOARD_ADDRESS,
EDU_BOARD_CONTENT,
USER_ID
FROM EDU_APPLY_BOARD
where EDU_BOARD_NO=3;

DELETE FROM EDU_APPLY_BOARD 
DROP EDU_APPLY_BOARD CASCADE CONSTRAINT;
WHERE EDU_BOARD_NO= 1;
SELECT count(*) FROM EDU_APPLY_BOARD

SELECT EDU_BOARD_NO,
EDU_BOARD_TITLE,
EDU_BOARD_START_PERIOD,
EDU_BOARD_END_PERIOD, 
EDU_BOARD_APPLY_START_PERIOD,
EDU_BOARD_APPLY_END_PERIOD,
EDU_BOARD_MAX_MEMBER_COUNT,
EDU_BOARD_ADDRESS,
EDU_BOARD_CATEGORY,
EDU_BOARD_CONTENT,
EDU_BOARD_STATUS,
USER_ID
FROM EDU_APPLY_BOARD
where EDU_BOARD_NO=1111
