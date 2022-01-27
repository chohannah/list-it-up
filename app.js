// #### step 1: 내용 추가

// - [ ] input에 내용을 입력하고 확인 버튼을 누르면 list에 내용이 보인다
// - [x] input에 내용을 입력하고 앤터키를 누르면 list에 내용이 보인다
// - [ ] input에 내용을 입력하고 나서 li 태그의 수가 0개 아면 .list-group에 .is-empty를 추가한다
// - [ ] input에 내용을 입력하고 나서 li 태그의 수가 1개 이상아면 .list-group에 .is-empty를 삭제한다
// - [ ] 추가되는 내용의 마크업은 `<ul class="list-group"></ul>` 안에 삽입해야 한다.
// - [ ] 총 내용 갯수를 count하여 상단에 보여준다.
// - [ ] 내용이 추가되고 나면 input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가 되지 않는다.

// #### step 2: 내용 수정

// - [ ] 내용의 수정 버튼을 클릭 이벤트를 받으면, 내용을 수정하는 prompt가 뜬다.
// - [ ] prompt에서 신규 내용을 입력 받고, 확인 버튼을 누르면 내용이 수정된다.

// #### step 3: 내용 삭제

// - [ ] 내용 삭제 버튼 클릭 이빈트를 받고, 메뉴 삭제 컨펌 prompt가 뜬다.
// - [ ] 확인 버튼을 클릭하면 내용이 삭제 된다.
// - [ ] 총 내용 갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector);

function App() {
  // form element가 자동으로 submit되는 것을 막기
  $('#list-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // input에 내용을 입력하고 나서 li 태그의 수가 0개 아면 .list-group에 .is-empty를 추가한다
  // input에 내용을 입력하고 나서 li 태그의 수가 1개 이상아면 .list-group에 .is-empty를 삭제한다

  //   if ($('.list-item').length >= 1) {
  //     $('.list-group').classList.remove('is-empty');
  //   }
  //   if (($('.list-item').length = 0)) {
  //     $('.list-group').classList.add('is-empty');
  //   }

  // list 내용을 입력 받기
  $('#emoji-off-input-text').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const emojiOffInputText = $('#emoji-off-input-text').value;
      const listItemTemplate = (listText) => {
        return `<li class="list-item is-more">
                    <div class="list-content">
                      <p class="list-text">${listText}</p>
                    </div>

                    <div class="badge-group">
                      <div class="badge badge-sm sm-only">
                        <button class="badge badge-sm-more" type="button">
                          <i class="ic-more"></i>
                        </button>
                        <div class="badge-sm-hidden">
                          <button
                            class="badge badge-sm-hidden-arrow-back"
                            type="button"
                          >
                            <i class="ic-arrow-back"></i>
                          </button>
                          <button
                            class="badge badge-sm-hidden-edit"
                            type="button"
                          >
                            <i class="ic-edit"></i>
                          </button>
                          <button
                            class="badge badge-sm-hidden-archive"
                            type="button"
                          >
                            <i class="ic-save"></i>
                          </button>
                          <button
                            class="badge badge-sm-hidden-delete"
                            type="button"
                          >
                            <i class="ic-rubbish"></i>
                          </button>
                        </div>
                      </div>

                      <div class="badge badge-md sm-hidden">
                        <button class="badge badge-md-edit" type="button">
                          edit
                        </button>
                        <button class="badge badge-md-archive" type="button">
                          archive
                        </button>
                        <button class="badge badge-md-delete" type="button">
                          delete
                        </button>
                      </div>
                    </div>
                  </li>`;
      };
    }
  });
}

App();