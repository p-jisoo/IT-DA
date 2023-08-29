
create table EDU_BOARD_MEMBER_COUNT(
MEMBER_COUNT_ID NUMBER,
--모집상태
EDU_BOARD_STATUS VARCHAR2(50) DEFAULT '모집중',
--사용자 아이디
USER_ID  VARCHAR2(30),
--교육 게시판 넘버
EDU_BOARD_NO NUMBER,
CONSTRAINT PK_MEMBER_COUNT PRIMARY KEY (MEMBER_COUNT_ID),
CONSTRAINT FK_MEMBER_COUNT FOREIGN KEY (USER_ID)
REFERENCES MEMBER(USER_ID) ON DELETE CASCADE,
CONSTRAINT FK_EDU_BOARD_COUNT FOREIGN KEY (EDU_BOARD_NO)
REFERENCES EDU_APPLY_BOARD(EDU_BOARD_NO) ON DELETE CASCADE	
)
SELECT * FROM EDU_BOARD_MEMBER_COUNT 
INSERT INTO EDU_BOARD_MEMBER_COUNT(
MEMBER_COUNT_ID,
EDU_BOARD_STATUS,
USER_ID,
EDU_BOARD_NO
)
VALUES(
EDU_BOARD_MEMBER_COUNT_SEQ.NEXTVAL,
'모집중',
'1234',
1
)
CREATE SEQUENCE EDU_BOARD_MEMBER_COUNT_SEQ;
DROP SEQUENCE EDU_BOARD_MEMBER_COUNT_SEQ;
create table EDU_BOARD_CATEGORY(
CATEGORY_ID NUMBER,
--교육분야
EDU_BOARD_CATEGORY VARCHAR2(100),
--사용자 아이디
USER_ID  VARCHAR2(30),
--교육게시판 넘버
EDU_BOARD_NO NUMBER,
CONSTRAINT PK_CATEGORY PRIMARY KEY (CATEGORY_ID),
CONSTRAINT FK_MEMBER_CATEGORY FOREIGN KEY (USER_ID)
REFERENCES MEMBER(USER_ID) ON DELETE CASCADE,
CONSTRAINT FK_EDU_BOARD_CATEGORY FOREIGN KEY (EDU_BOARD_NO)
REFERENCES EDU_APPLY_BOARD(EDU_BOARD_NO) ON DELETE CASCADE
)
drop table EDU_BOARD_CATEGORY
drop table EDU_BOARD_MEMBER_COUNT
