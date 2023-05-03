<h1 align="center">CLOSET</h1>
<h3 align="center"> 옷장 의류를 웹에서 관리해봅시다 </h3> 
<br />

- 프로젝트 명 : 클로젯(Closet)
- 팀 원 : 최원익(Front), 최원익(Back)
  <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="프로젝트소개"> :book: 프로젝트 소개</h2>

<p align="justify">
가정 옷장의 자신의 의류들의 재고, 사이즈, 종류별 비율 등 한눈에 쉽게 파악할 수 있도록 도와주는 프로젝트 입니다 <br />
많은 사람들이 인터넷 쇼핑몰을 적극 활용해서 쇼핑을 하고 있고, 수많은 광고와 브랜드의 신상품이 쏟아지는 상황 속 자칫 계획에 없던 소비가 이뤄질 수 있습니다. 현재 자신이 소유하는 의류들을 쉽게 파악하고, 이를 통해 계획적이고 합리적인 쇼핑을 할 수 있도록 도와줍니다.
<br/>
<br/>
현재 배포된 사이드 프로젝트는 개인 대시보드 구조로서 로그인 및 회원가입, 전체 요약 페이지(Overview), 목록 페이지(Store), 의류 저장 페이지(Add), 의류 상세 페이지(Details) 까지 구현이 되어있습니다. <br /> 추후 검색기능, 데이터 차트 페이지, 회원정보 페이지 외 필요사항들을 업데이트 해나갈 예정입니다.
</p>
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="팀원 소개"> :dart: 개발 기간 및 팀원</h2>

- 개발 기간 : 2023/2/1 ~ 2023/4/30 (3개월)
- 개발 인원 : 1명(Front, Back)
  - FE : 최원익
  - BE : 최원익
    <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="사용 기술"> :fork_and_knife: Skills</h2>

### Front-end

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-Saga-999999?style=flat-square&logo=Redux-Saga&logoColor=black"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/><img src=https://img.shields.io/badge/SWR-SWR-black/>

### Back-end

<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>

### 협업 툴

<img src="https://img.shields.io/badge/slack-4A154B?style=flat-square&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/trello-0052CC?style=flat-square&logo=trello&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white"/>
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="시연 영상"> :cactus: 시연 영상</h2>

[위앤비 프로젝트 시연영상](https://www.youtube.com/watch?v=btDS154C5yg)
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="구현목표"> :floppy_disk: 구현 목표</h2>

- 메인 페이지 (Swiper slider 라이브러리를 이용한 이미지 슬라이더 구현 및 카테고리를 탭메뉴로 구현)
- 숙소 필터링 기능 (가격, 숙소 유형, 편의시설 등 다양한 옵션을 체크함에 따라 실시간으로 옵션에 해당하는 숙소 개수 출력)
- 소셜 로그인 (카카오 REST API)을 이용한 로그인 페이지
- 구글지도 API를 활용하여 해당 페이지의 숙소목록을 지도마커로 가격이 표기되도록 구현
- 숙소 상세 페이지 (datepicker를 활용한 캘린더에서 날짜 선택 후 예약 기능 구현)
- 예약 목록 및 상세페이지 (fetch - delete 메소드를 활용하여 예약 취소 기능 구현
- Nav (지역, 날짜, 게스트 추가에 따라 해당하는 숙소 목록이 보이도록 검색 기능 구현)
  <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="담당하였던part"> :large_blue_diamond: 담당하였던 Part</h2>
<br />

<p align="justify">
  상단 Nav 부분과, filter 기능을 담당하였습니다.
</p>

- Nav, 숙소 필터링 기능 담당
- useNavigate 응용 필터 데이터 백엔드 API 로 전달
- Date picker 활용 날짜예약 구현
- material UI 활용 숙소의 가격, 종류 등 필터입력 구현
- useEffect의 의존성 배열을 활용하여 실시간 필터링된 데이터 렌더링
<br />

  <p align="justify">
  아래는 구현한 Nav 의 구조도입니다.
</p>

<img src="public/images/readme/구조도.png" width="100%" />
<br />
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="추가기능"> :large_blue_diamond: 프로젝트 이후 추가 구현사항</h2>
<br />

<p align="justify">
  프로젝트를 진행할 당시 아쉬웠던 부분들이 있었는데, 이후 담당하였던 Nav, Filter part 내 추가하거나 변경하고 싶었던 사항들을 반영하였습니다. 
</p>

- Nav 작업 중 햇갈렸던 변수명에 대해서 좀 더 직관적으로 정리하려고 하였습니다.
- Nav 구조도 상 하위 컴포넌트로 전달하려는 props 가 늘어날 수 밖에 없었는데, 이에 redux 를 도입하여 상태값을 전달하는 방식으로 변경하였습니다.
- Nav 내 Search 부분을 따로 분리하여, 서버에 검색 데이터 전달 시 전송 성공 및 실패 분기 처리를 redux-saga 를 통해 처리하였습니다.
  <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 align="center" id="Nav.js">Nav.js</h2>

<img src="public/images/readme/위엔비필터.gif" width="100%" />
<br>
<h3 id="main"> :scroll: Key-Point</h3>

> **이벤트 버블링을 제한하기**

<p align="justify">
Nav 구현 중 로그인, 회원가입 등 옵션을 선택할 수 있는 프로필 모달창을 만들었어야 했는데, 로그인 버튼을 클릭할 시 다른 모달창의 overlay 속성에 의해 로그인이 눌리지 않고 모달창이 닫히는 현상이 발생하였습니다. 
<br />처음에는 프로필 모달창(로그인 하기 버튼이있는)의 z-index 값을 더 높혀서 처리하려 했으나 잘 되지 않았고, 방법을 찾아보다가 로그인 버튼을
누르는 이벤트가 더 상위인 overlay 클릭 이벤트까지 도달하지 않는다면 될 것이라 판단하였습니다.<br /> 상위 이벤트까지 버블링 되는 것을 막는 방법으로 <b>event.stopPropagation()</b>을
활용하니 로그인 버튼을 클릭해도 모달창이 닫히지 않게되어 해결되었습니다.
</p>

```js
const ProfileContainer = ({setProfileModal, switchModal}) = {
 return (
    <>
      <ModalOverlayInUserInfo onClick={() => setProfileModal(false)} />
      <ModalProfile onClick={e => e.stopPropagation()}>
        <TopContainer>
          <UserInfoMenu onClick={switchModal}>
            <InfoMenuLogin>로그인</InfoMenuLogin>
          </UserInfoMenu>
          <UserInfoMenu>
            <InfoMenuText>회원가입</InfoMenuText>
          </UserInfoMenu>
        </TopContainer>
        // 생략
    </>
  );
  }
```

<br />

[더 자세한 내용은 블로그참조](https://rock7246.tistory.com/17?category=990492)
<br />
<br />

> **페이지에 따른 조건부 스타일**

<p align="justify">
Nav 의 최대 가로폭이 메인페이지와 상세페이지 간의 차이가 발생하도록 설정을 해야했고, position 역시 기존 fixed 에서 relative 로 변경이 되어야만 했습니다.<br />
조건부로 스타일에 변경을 주어야 하겠다 생각하였지만 바로 방법이 떠오르지는 않았습니다. 두 페이지 간의 차이점은 URL 주소에서 나타난다는 점을 착안하여서 만일 주소에
상세페이지의 라우트 주소인 '/detail' 이 마지막에 pathname 으로 존재하는지의 여부를 조건으로 걸어서 스타일을 변경하도록 로직을 구성하고자 하였습니다.<br/><br/>

다만 처음에 이렇게 적용을 하니 문제가 발생하였는데, 처음 로직을 구성할때는 pathname 이 완전히 '/detail' 경우에 한해서 스타일을 적용하도록 작성하였기 때문에, 각각의
숙소에 대한 pathname '/detail/1,2'... 등 변경되는 상세페이지에 대해서는 반응하지 못하였습니다.<br /> 좀 더 고민을 하다가 pathname 에 '/detail' 이 포함되어 있다면
스타일을 적용하는 방식으로 전환하여 해결하였습니다.

</p>

```js
const BeforeSearch = ({
  startDate,
  endDate,
  location,
  guest,

	// 생략

  modalIsOpen,
  setModalIsOpen,
  switchModal,
  reroad,
}) => {
  let uselocation = useLocation();
  let is_detail = uselocation.pathname;

  // 생략

  return (
    <SectionBefore
      className={toggleNavbar ? 'toggle_open' : null}
      detail={is_detail}
    >
      <OnClickSearchSection // 포함여부를 따진다. 포함하면 클래스 'detail_width' 적용
        className={is_detail.includes('detail') ? 'detail_width' : null}
      >
        <TopNavSection>
          <LogoContainer onClick={reroad}>

          // 생략

   )

 const SectionBefore = styled.div`
  position: ${props =>
    props.detail.includes('/detail') ? 'relative' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  opacity: 0;
  z-index: 102;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &.toggle_open {
    opacity: 1;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: both;
  }
`;

  const OnClickSearchSection = styled.div`
  width: 100%;
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 80px;

  &.detail_width {
    padding: 0;
    max-width: 1170px;
  }
`;
```

<br />

[더 자세한 내용은 블로그참조](https://rock7246.tistory.com/20)
<br />
<br />

<h2 align="center" id="Filter.js">Filter.js</h2>

<img src="public/images/readme/filter2.gif" width="100%" />
<br>
<h3 id="main"> :scroll: Key-Point</h3>

> **실시간으로 중첩 filter 된 숙소 데이터를 화면에 렌더링 하기**

<p align="justify">
filter 컴포넌트를 작성할때 고려해야 했던 로직 순서가 있었습니다.
</p>
<br />

- 백엔드로 부터 현 메인페이지에 있는 숙소 데이터를 가져옵니다.
- 가져온 데이터를 기반으로 침대갯수, 숙소유형 등 필터링을 통해 데이터를 변경하고 이는 실시간으로 화면에 표현되어야 합니다.
- 필터의 적용이 끝나고 적용을 누를 시 변경된 부분을 navigate 를 통해 url의 파라미터로 전달한 뒤, 메인페이지에서 url을통해 백엔드에게 요청해야합니다.
<br />
<p align="justify">
이러한 로직을 구현함에 있어서 계속 구현이 되지 않았던 부분은 필터가 적용이 될 때마다 실시간으로 데이터를 변경시켜 렌더를 다시 시키는 부분과,<br /> 필터 체크박스를 중첩으로
적용시키거나 제외할때마다 그에 맞는 데이터를 화면에 랜더링 하는 부분이이었습니다.<br /> filter 메서드를 활용해야겠다 생각했지만, 필터 체크박스를 체크했다 제외했다를 반복하다
보니 숙소 데이터가 이미 filter 메서드로 변경되어있었기에 최초 숙소 데이터로 복귀시키지 못해 구현을 못하고 있었습니다. <br />그러다 1차 프로젝트 때 useEffect 의 라이프 사이클을
활욜했던 기억이 떠올라서 이를 활용해보면 가능하지않을까 생각했습니다.<br /><br />

필터 역시 모달창이고 내부의 화면을 업데이트 시키는 것이니, useEffect 의 라이프사이클 중 업데이트 부분을 활용해야겠다 생각했고, <br />필터값(state로 관리되는)들이 변화가 생길때마다
useEffect 의 의존성 배열을 활용하여 필터값이 변경될때마다 숙소 데이터를 업데이트 시켜주는 방식으로 구현을 해봤습니다. <br />결과적으로 실시간으로 필터값에 따라 숙소데이터를 화면에 잘
랜더링 하게 되어 해결하였습니다.

</p>

```js
const applyFilter = () => {
  let updatelist = copyData.current; // 원본 숙소 데이터의 복사본을 가져온다.

  if (bedroomValue) {
    // 필터가 적용된 부분에 관하여 숙소 데이터를 필터해서 업데이트 해준다.
    updatelist = updatelist.filter((data) => data.bedroom === bedroomValue);
  }

  if (bedValue) {
    updatelist = updatelist.filter((data) => data.bed === bedValue);
  }

  if (bathroomValue) {
    updatelist = updatelist.filter((data) => data.bathroom === bathroomValue);
  }

  const TempChecked = stayData.filter((item) => item.isChecked).map((item) => item.id);
  const AmentiChecked = amenitiesData.filter((item) => item.isChecked);

  if (TempChecked.length) {
    updatelist = updatelist.filter((data) => TempChecked.includes(data.room_type));
  }

  if (AmentiChecked.length) {
    const checkedType = AmentiChecked.map((data) => data.name.replace(/(\s*)/g, ""));
    const isTrue = (current) => current === true;
    updatelist = updatelist.filter((item) => checkedType.map((data) => item.facilities.join("").includes(data)).every(isTrue));
  }

  if (priceSetting.length) {
    updatelist = updatelist.filter((item) => item.room_price >= value.value[0] && item.room_price <= value.value[1]);
  }

  setTransferUserData(updatelist); // 필터된 숙소 데이터를 렌더링할 데이터로
};

// useEffect 로 필터함수 재실행
useEffect(() => {
  applyFilter();
}, [bedroomValue, bedValue, bathroomValue, stayData, amenitiesData, value]);
```

<br />

[더 자세한 내용은 블로그참조](https://rock7246.tistory.com/30)
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 align="center" id="Nav.js">추가 구현 사항(Nav.js)</h2>

<br>
<h3 id="main"> :scroll: Key-Point</h3>

> **변수명 변경하기**

<p align="justify">
프로젝트 당시 구현하는 과정에서 다루는 모달창의 수가 많았었고, 그로 인해 화면 내 모달창 랜더유무를 결정하는 boolean 상태값을 가지는 변수들이 많았습니다.  
<br />기능을 구현하는데 집중을 하다보니, 추후에 다시 수정하는 과정에서 어떤 상태값이 어떠한 모달창과 연결되어 있는지 파악하기 어려웠습니다. <br />
이에 완벽하진 않아도 최대한 직관적으로 변수명 수정을 진행하였습니다.
</p>

<br />

> **Before**

```js
const Nav = () => {
  // 생략
  // ...
  // 변수명만으로 어떠한 모달창과 연결되는지 쉽게는 파악이 안됩니다.
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const [profileModal, setProfileModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(true);
  const [isToken, setIsToken] = useState(false);
  // 이외 추가적으로 변경할 부분도 있었습니다.
};
```

<br />

> **After**

```js
// reducers/nav.js 내 initialState
// 최대한 직관적으로 표현하고자 노력했습니다.
const initialState = {
  location: "지도표시지역",
  guestCount: 0,
  date: {
    start: null,
    end: null,
  },
  isToken: false,
  isClickUserInfoButton: false, // 우측 상단 유저정보 버튼 상태
  isOpenLoginModal: false, // login 모달창 상태
};

// reducer/search.js 내 initialState
const initialState = {
  data: {
    startDay: null,
    endDay: null,
    selectLocation: null,
    totalGuest: null,
  },
  isClickSearch: true, // 상단 검색 부분 선택 여부
  isDateModalOpen: false,
  isLocationModalOpen: false,
  isGuestModalOpen: false,
  currentModalId: 0,
  searchForAccommodationLoading: false, // 최종 숙박시설 검색
  searchForAccommodationSuccess: false,
  searchForAccommodationError: false,
};
```

<br />
<br />

> **과도한 props 처리**

<p align="justify">
Nav 구조 특성상 하위 컴포넌트에 전달해야 하는 props 의 수가 많았습니다. 
<br /> 하나의 상태가 추가되면 그에 따라 하위 컴포넌트 전체에 전달하여야 했고, 가끔 실수도 많이 하게 되어 애를 먹었던 기억이 있습니다.<br />
추후 redux 를 도입하여 상태값을 직접 전달하는 방식으로 하는 것이 어떨까 생각하였고, 실제로 상태 관리가 편리해짐을 느낄 수 있었습니다.
</p>

<br />

> **Before**

```js
// Nav
const Nav = () => {
  // 생략
  // ...
  return (
    <>
      <div>
        <BeforeSearch
          toggleNav={toggleNav}
          toggleNavbar={toggleNavbar}
          startDate={startDate}
          endDate={endDate}
          location={location}
          guest={guest}
          setLocation={setLocation}
          onChange={onChange}
          increseNum={increseNum}
          decreseNum={decreseNum}
          profileModal={profileModal}
          setProfileModal={setProfileModal}
          clickUserInfo={clickUserInfo}
          isToken={isToken}
          setIsToken={setIsToken}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          switchModal={switchModal}
          reroad={reroad}
        />
        {/** 생략 **/}
      )
};
```

```js
// BeforeSearch.js
const BeforeSearch = ({
  startDate,
  endDate,
  location,
  guest,
  toggleNavbar,
  toggleNav,
  profileModal,
  setProfileModal,
  clickUserInfo,
  isToken,
  setIsToken,
  modalIsOpen,
  setModalIsOpen,
  switchModal,
  reroad,
}) => {
  // ...
  const swtichProfileModal = {
    1: (
      <ProfileContainer
        profileModal={profileModal}
        setProfileModal={setProfileModal}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        switchModal={switchModal}
        isToken={isToken}
        setIsToken={setIsToken}
      />
    ),
    2: <ProfileLoginContainer profileModal={profileModal} setProfileModal={setProfileModal} isToken={isToken} setIsToken={setIsToken} switchModal={switchModal} />,
  };
};
```

<p align="justify">
점점 props 로 전달해야 하는 상황이 늘어나 관리하기가 힘들었었습니다.
</p>

<br />

> **After**

```js
// 컴포넌트가 좀 더 직관적이고 가독성이 좋아졌습니다.
const Nav = () => {
  const dispatch = useDispatch();
  const { isToken } = useSelector((state) => state.nav);
  const modalRef = useRef();

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      dispatch({
        type: TOKEN_EXIST,
      });
    } else {
      dispatch({
        type: TOKEN_DELETE,
      });
    }
  }, [isToken]);

  return (
    <>
      <div>
        <BeforeSearch />
        <OnClickSearch modalRef={modalRef} />
      </div>
      {localStorage.getItem("key") ? <SignModal /> : <LoginModal />}
    </>
  );
};
```

```js
// BeforeSearch.js
const BeforeSearch = () => {
  const dispatch = useDispatch();
  const { isToken, isClickUserInfoButton, location, guestCount } = useSelector((state) => state.nav);
  const { start, end } = useSelector((state) => state.nav.date);
  const { isClickSearch } = useSelector((state) => state.search); // reducer 내 store 에서 가져옵니다.

  const swtichProfileModal = {
    1: <ProfileContainer />,
    2: <ProfileLoginContainer />,
  };
  // ...
  // 이 외 다른 컴포넌트 역시 훨씬 상태관리가 용이해졌습니다.
};
```

<p align="justify">
reducer 내 코드량이 증가하였지만, Nav 컴포넌트 뿐 아니라 밑 하위 컴포넌트 역시 훨씬 상태를 관리하기 용이해졌고, 상태를 가져오는 것도 편리해졌습니다.
</p>

<br />
<br />

> **Redux-saga 활용(middleware) action 분기 처리하기 **

<p align="justify">
서버와 데이터를 주고 받는 과정에서 전송이 실패하는 경우(error) 역시 구현해주었어야 했는데, 프로젝트 진행당시에는 이를 구현하지 못했습니다.
<br />간단하기는 해도 에러가 발생했을 경우에 대해서도 따져야 겠다고 생각하였고, 공부중이었던 Redux-Saga 를 활용하여 action 을 분기처리 하였습니다. <br />
검색에 대한 요청을 보내고, 이 요청에 대해 saga 가 받아 서버와 데이터를 주고 받으며, 이 데이터의 결과에 따라 성공 과 실패 각각의 action 을 reducer 로 전달합니다.
</p>

<br />

> **Before**

```js
const Search = () => {
  // 생략
  const toSearchUserInfo = (e) => {
    e.stopPropagation();

    const startDay = startDate ? `&check_in=${toStringByFormatting(startDate, "-")}` : "";
    const endDay = endDate ? `&check_out=${toStringByFormatting(endDate, "-")}` : "";
    const selectLocation = location ? `&address=${location}` : "";
    const totalGuest = guest ? `&maximum_occupancy=${guest}` : "";

    navigate(`/list?${startDay}${endDay}${selectLocation}${totalGuest}`); // 리스트 페이지로 이동

    // 데이터를 전송하기
    fetch(`${BASE_URL}/rooms?${startDay}${endDay}${selectLocation}${totalGuest}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
    setDateModalIsOpen(false);
    setLocationModalIsOpen(false);
    setGuestModalIsOpen(false);
    setCurrentId(0);
    setToggleNavbar(true);
  };
};
```

<br />

> **After**

```js
// 요청 보내기
const toSearchUserInfo = (e) => {
  e.stopPropagation();

  const startDay = start ? `&check_in=${toStringByFormatting(start, "-")}` : "";
  const endDay = end ? `&check_out=${toStringByFormatting(end, "-")}` : "";
  const selectLocation = location ? `&address=${location}` : "";
  const totalGuest = guestCount ? `&maximum_occupancy=${guestCount}` : "";

  // 요청을 reducer 와 saga 에 데이터와 함께 보냅니다.
  dispatch(
    searchAccommodationRequest({
      startDay: startDay,
      endDay: endDay,
      selectLocation: selectLocation,
      totalGuest: totalGuest,
    })
  );

  navigate(`/list?${startDay}${endDay}${selectLocation}${totalGuest}`);
};

// 요청 이후 saga 에서 판단
// 생략....

function searchAPI(data) {
  // 서버에 데이터를 전송하기
  return axios.get(`${BASE_URL}/rooms?${data.startDay}${data.endDay}${data.selectLocation}${data.totalGuest}`);
}
// 요청에 대해 성공과 실패로 분기처리 합니다.
function* searchAccommodation(action) {
  try {
    const result = yield call(searchAPI, action.data);
    yield put({
      // 데이터가 성공적으로 전달될 시
      type: SEARCH_ACCOMMODATION_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      // 실패할 시
      type: SEARCH_ACCOMMODATION_FAILURE,
      error: err.response.data,
    });
  }
}
```

<p align="justify">
요청을 통해 saga 에서 요청 성공과 실패에 대해 다시 reducer 로 dispatch 하여 reducer 에서 각각의 타입을 받습니다.
</p>

<br />
<br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
