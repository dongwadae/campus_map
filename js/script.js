$(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (!lightSwitch) {
    return;
  }

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.body.classList.add("bg-dark");

    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    // set light switch input to true
    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem("lightSwitch", "dark");
  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem("lightSwitch", "light");
  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    if (lightSwitch.checked) {
      darkMode();
    } else {
      lightMode();
    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("lightSwitch");
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();
});

//지도생성
var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(35.86258560987228, 129.19449739570643),
  level: 4, // 지도 확대 레벨
};

var map = new kakao.maps.Map(container, options);

//건물 정보 및 리스트
var positions = [];
var obj;

obj = {
  idx: "1",
  ord: "1",
  latitude: "35.86175815452479",
  longitude: "129.1934285475951",
};
positions.push(obj);

obj = {
  idx: "2",
  ord: "2",
  latitude: "35.86248983467",
  longitude: "129.194561169428",
};
positions.push(obj);

obj = {
  idx: "3",
  ord: "3",
  latitude: "35.862045527397",
  longitude: "129.196192679837",
};
positions.push(obj);

obj = {
  idx: "4",
  ord: "4",
  latitude: "35.8625172239496",
  longitude: "129.197251736296",
};
positions.push(obj);

obj = {
  idx: "5",
  ord: "5",
  latitude: "35.8632032446256",
  longitude: "129.193241462091",
};
positions.push(obj);

obj = {
  idx: "6",
  ord: "6",
  latitude: "35.8638486722822",
  longitude: "129.191449409679",
};
positions.push(obj);

obj = {
  idx: "7",
  ord: "7",
  latitude: "35.8610709174392",
  longitude: "129.197012558495",
};
positions.push(obj);

obj = {
  idx: "8",
  ord: "8",
  latitude: "35.8653441397659",
  longitude: "129.190970328559",
};
positions.push(obj);

obj = {
  idx: "9",
  ord: "9",
  latitude: "35.86615398046826",
  longitude: "129.194977720653",
};
positions.push(obj);

obj = {
  idx: "10",
  ord: "10",
  latitude: "35.860586186340996",
  longitude: "129.1955574497556",
};
positions.push(obj);

obj = {
  idx: "11",
  ord: "11",
  latitude: "35.86309458962704",
  longitude: "129.19659798932682",
};
positions.push(obj);

obj = {
  idx: "12",
  ord: "12",
  latitude: "35.863062601804536",
  longitude: "129.19144436414584",
};
positions.push(obj);

obj = {
  idx: "13",
  ord: "13",
  latitude: "35.864100564383335",
  longitude: "129.19554095932278",
};
positions.push(obj);

obj = {
  idx: "14",
  ord: "14",
  latitude: "35.86049983027403",
  longitude: "129.19448968515783",
};
positions.push(obj);

obj = {
  idx: "15",
  ord: "15",
  latitude: "35.862929365697624",
  longitude: "129.19787192510844",
};
positions.push(obj);

obj = {
  idx: "16",
  ord: "16",
  latitude: "35.862525123627854",
  longitude: "129.19188893320077",
};
positions.push(obj);

obj = {
  idx: "17",
  ord: "17",
  latitude: "35.86117458582743",
  longitude: "129.1962710308215",
};
positions.push(obj);

obj = {
  idx: "19",
  ord: "18",
  latitude: "35.866292145842635",
  longitude: "129.19111266682967",
};
positions.push(obj);

obj = {
  idx: "20",
  ord: "19",
  latitude: "35.86306555694647",
  longitude: "129.19263992652841",
};
positions.push(obj);

obj = {
  idx: "21",
  ord: "20",
  latitude: "35.864775857580845",
  longitude: "129.1910044925737",
};
positions.push(obj);

obj = {
  idx: "22",
  ord: "21",
  latitude: "35.86348808136392",
  longitude: "129.19207596477614",
};
positions.push(obj);

obj = {
  idx: "23",
  ord: "22",
  latitude: "35.86289767636298",
  longitude: "129.19245819251756",
};
positions.push(obj);

obj = {
  idx: "24",
  ord: "23",
  latitude: "35.8584090035117",
  longitude: "129.19525110737337",
};
positions.push(obj);

obj = {
  idx: "25",
  ord: "24",
  latitude: "35.85830866243536",
  longitude: "129.1945786893072",
};
positions.push(obj);

obj = {
  idx: "26",
  ord: "25",
  latitude: "35.857889606639844",
  longitude: "129.19704648636957",
};
positions.push(obj);

obj = {
  idx: "27",
  ord: "26",
  latitude: "35.85831855089638",
  longitude: "129.19674840734336",
};
positions.push(obj);

obj = {
  idx: "28",
  ord: "27",
  latitude: "35.85851509654327",
  longitude: "129.19289641571257",
};
positions.push(obj);

obj = {
  idx: "29",
  ord: "28",
  latitude: "35.863314697804775",
  longitude: "129.1955248094969",
};
positions.push(obj);

obj = {
  idx: "30",
  ord: "29",
  latitude: "35.86587305593181",
  longitude: "129.19087142967274",
};
positions.push(obj);

obj = {
  idx: "31",
  ord: "30",
  latitude: "35.864310623585055",
  longitude: "129.19464736406715",
};
positions.push(obj);

obj = {
  idx: "32",
  ord: "31",
  latitude: "35.86578586505424",
  longitude: "129.1910821194939",
};
positions.push(obj);

obj = {
  idx: "33",
  ord: "32",
  latitude: "35.86356247867739",
  longitude: "129.19083824840564",
};
positions.push(obj);

obj = {
  idx: "34",
  ord: "33",
  latitude: "35.86051510630136",
  longitude: "129.1964880437951",
};
positions.push(obj);

obj = {
  idx: "35",
  ord: "34",
  latitude: "35.86143277240115",
  longitude: "129.1932369394949",
};
positions.push(obj);

obj = {
  idx: "36",
  ord: "35",
  latitude: "35.86547868264247",
  longitude: "129.19334846367212",
};
positions.push(obj);

function fn_openInfo(a, b, c) {
  relayout();
  $(".makerOverlay").addClass("invisible");
  $("#markerOverlay_" + a).removeClass("invisible");
  $(".makerOverlay").removeClass("on");
  $("#markerOverlay_" + a).addClass("on");
  $(".campus_list li").removeClass("on");
  $("#campus_list_" + a).addClass("on");

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(new kakao.maps.LatLng(b, c));
  map.setLevel(LatLng(1));
}

// 지도 크기 변경 후 relayout
function relayout() {
  map.relayout();
}

for (var i = 0; i < positions.length; i++) {
  // 오버레이생성하기
  var data = positions[i];
  displayOVerlay(data);
}

function displayOVerlay(data) {
  // 오버레이생성 펑션
  var content =
    '<div class="makerOverlay" id="markerOverlay_' +
    data.idx +
    '">' +
    '   <a href="javascript:fn_openInfo(' +
    data.idx +
    "," +
    data.latitude +
    "," +
    data.longitude +
    ');">' +
    '       <span class="num">' +
    data.ord +
    "</span>" +
    "   </a>" +
    "</div>";

  //커스텀 오버레이 생성
  var overlay = new kakao.maps.CustomOverlay({
    yAnchor: 3,
    position: new kakao.maps.LatLng(data.latitude, data.longitude), // 커스텀 오버레이가 표시 될 위치
    content: content,
  });
  overlay.setMap(map);
}

function camSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchKeyword");
  filter = input.value.toUpperCase();
  ul = document.getElementById("cam-list");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

$(document).ready(function () {
  $(".slide_btn").click(function () {
    $(".overlay").toggleClass("cls");
    $(".map_wrap").toggleClass("cls");
    $(".campus_info").toggleClass("cls");
    $(".slide_btn").toggleClass("cls");
  });
});
