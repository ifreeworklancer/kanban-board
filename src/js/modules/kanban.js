import dragula from 'dragula';

/**
 * Get element
 */
let stopAddBoardColumn = false,
    stopChangeBoardCard = false,
    stopChangeBoardColumn = false,
    alerting = document.querySelector('.alert'),
    addBoardColumn = document.querySelector('.add-board-card');

/**
 * Init and Listener drag and drop card
 */
function dragAndDrop() {
    let boardCardBodyItemContainer = [];
    let drake;
    document.querySelectorAll('.board-card-body').forEach(item => {
        boardCardBodyItemContainer.push(item);
        drake = dragula(boardCardBodyItemContainer);
        drake.on('drag', function (el, source) {
            addClassBoard(source.closest('.board-card'), "add-card");
        });
        drake.on('drop', function (el, target, source) {
            addClassBoard(target.closest('.board-card'), "save-card");
        })
    })
}

/**
 * Watch focus on board card name
 */
function focusBoardCardName() {
    let boardCardName = document.querySelectorAll('.board-card__name');
    boardCardName.forEach(item => {
        item.addEventListener('focus', function () {
            if (!stopChangeBoardCard) {
                item.readOnly = false;
                item.classList.add('board-card__value');
                addClassBoard(item.closest('.board-card'), "save-column");
                stopAddBoardColumn = true;
            } else {
                item.readOnly = true;
            }
        });
        item.addEventListener('blur', function () {
            if (!stopChangeBoardCard) {
                stopChangeBoardColumn = true;
            }
        });
    });
}

/**
 * Watch focus and resize on board card text
 */
function focusBoardCardText() {
    let boardCardText = document.querySelectorAll('.board-card__text');
    boardCardText.forEach(item => {
        item.classList.remove('is-selected');
        item.addEventListener('focus', function () {
            if (!stopChangeBoardColumn) {
                item.readOnly = false;
                item.classList.add('is-selected');
                addClassBoard(item.closest('.board-card'), "save-card");
                stopAddBoardColumn = true;
            } else {
                item.readOnly = true;
            }
        });
        item.addEventListener('blur', function () {
            if (!stopChangeBoardColumn) {
                stopChangeBoardCard = true;
            }
        });
        item.addEventListener('input', function () {
            item.style.height = "45px";
            item.style.height = (item.scrollHeight) + "px";
        });
    });
}


/**
 * Add class in board
 */
function addClassBoard(element, addedClass) {
    element.classList.remove("add-card", "save-card", "save-column");
    element.classList.add(addedClass);
}

/**
 * Save board column
 */
function saveBoardColumn() {
    let saveBoardCard = document.querySelectorAll('.board-card-footer-item-save-column a');
    saveBoardCard.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let boardCardName = item.closest('.board-card').querySelector('.board-card__name');
            if (boardCardName.value !== '') {
                boardCardName.classList.remove('board-card__value');
                addClassBoard(item.closest('.board-card'), "add-card");
                stopAddBoardColumn = false;
                stopChangeBoardColumn = false;
            } else {
                alerting.classList.add('active');
                alerting.querySelector('.alert-text').innerText = 'Название колонки обязательное';
                setTimeout(() => {
                    alerting.classList.remove('active');
                }, 8000)
            }
        })
    });
}

/**
 * Remove board column
 */
function removeBoardColumn() {
    let removeBoardCard = document.querySelectorAll('.board-card-footer-item-save-column .board-icon');
    removeBoardCard.forEach(item => {
        item.addEventListener('click', function () {
            item.closest('.board-column').remove();
            stopAddBoardColumn = false;
            stopChangeBoardColumn = false;
        })
    });
}

/**
 * Add board card
 */
function addBoardCard(element) {
    element.addEventListener('click', function () {
        let boardCardBody = element.closest('.board-card').querySelector('.board-card-body'),
            boardCardBodyItem = document.createElement('div');
        boardCardBodyItem.className = 'board-card-body-item';
        boardCardBodyItem.innerHTML = '<textarea class="board-card__text board-card__value" placeholder="Введите название карточки"></textarea>';
        addClassBoard(element.closest('.board-card'), "save-card");
        boardCardBody.append(boardCardBodyItem);
        focusBoardCardText();
        let boardCardText = boardCardBody.querySelectorAll('.board-card__text');
        boardCardText[boardCardText.length - 1].focus();
        dragAndDrop();
    });
}

/**
 * Save board card
 */
function saveBoardCard() {
    let saveBoardCard = document.querySelectorAll('.board-card-footer-item-save-card a');
    saveBoardCard.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let boardCardText = item.closest('.board-card').querySelectorAll('.board-card__text');

            let emptyBoardCardText = Array.from(boardCardText).find(item => {
                return item.value === '';
            });

            if (emptyBoardCardText) {
                alerting.classList.add('active');
                alerting.querySelector('.alert-text').innerText = 'Название карточки обязательное';
                setTimeout(() => {
                    alerting.classList.remove('active');
                }, 8000);
            } else {
                stopChangeBoardCard = false;
                stopAddBoardColumn = false;
                addClassBoard(item.closest('.board-card'), "add-card");
            }
        })
    });
}

/**
 * Remove board card
 */
function removeBoardCard() {
    let removeBoardCard = document.querySelectorAll('.board-card-footer-item-save-card .board-icon');
    removeBoardCard.forEach(item => {
        item.addEventListener('click', function () {
            let boardCardText = item.closest('.board-card').querySelector('.board-card__text.is-selected');
            boardCardText.closest('.board-card-body-item').remove();
            addClassBoard(item.closest('.board-card'), "add-card");
            stopChangeBoardCard = false;
            stopAddBoardColumn = false;
        })
    })
}

/**
 * Create board column
 */
addBoardColumn.addEventListener('click', function () {
    if (!stopAddBoardColumn) {
        let col = document.createElement('div'),
            boardHeader = '<div class="board-card-header"><input type="text" class="board-card__name board-card__value" placeholder="Введите название колонки"></div>',
            boardBody = '<div class="board-card-body"><div class="board-card-body-item"></div></div>',
            boardFooter = '<div class="board-card-footer"><div class="board-card-footer-item board-card-footer-item-add-card"><div class="board-icon board-icon--add"><div class="line line--left"></div><div class="line line--right"></div></div><div class="board-card-footer__text">Добавить еще одну карточку</div></div><div class="board-card-footer-item board-card-footer-item-save-card board-card-footer-item--save"><a href="#" class="btn btn-primary">Сохранить карточку</a><div class="board-icon board-icon--remove"><div class="line line--left"></div><div class="line line--right"></div></div></div><div class="board-card-footer-item board-card-footer-item-save-column board-card-footer-item--save"><a href="#" class="btn btn-primary">Сохранить колонку</a><div class="board-icon board-icon--remove"><div class="line line--left"></div><div class="line line--right"></div></div></div></div>',
            boardCard = `<div class="board-card save-column">${boardHeader}${boardBody}${boardFooter}</div>`;
        col.className = 'board-column col-12 col-md-6 col-lg-4 col-xl-3';
        col.innerHTML = boardCard;
        addBoardColumn.closest('.board-column').before(col);
        col.querySelector('.board-card__name').focus();
        stopAddBoardColumn = true;
        saveBoardColumn();
        removeBoardColumn();
        addBoardCard(col.querySelector('.board-card-footer-item-add-card'));
        removeBoardCard();
        saveBoardCard();
        focusBoardCardName();
        dragAndDrop();
    }
});

