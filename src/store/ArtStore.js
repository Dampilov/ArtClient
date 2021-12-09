import {makeAutoObservable} from 'mobx';

export default class ArtStore {
    constructor() {
        this._tags = [
            {id: 1, name: 'Обстракция'},
            {id: 2, name: 'Реализм'}
        ]
        this._types = [
            {id: 1, name: 'Авангард'},
            {id: 2, name: 'Средневековье'}
        ]
        this._arts = [
            {id: 1, name: 'Желтое поле', views: 0, likes: 0, img: 'https://st2.depositphotos.com/1927453/7592/i/600/depositphotos_75925837-stock-photo-rural-landscape-with-wheat-field.jpg'},
            {id: 2, name: 'Зеленое поле', views: 0, likes: 0, img: 'https://www.rabstol.net/uploads/gallery/main/354/rabstol_net_fields_04.jpg'},
            {id: 3, name: 'Урожай, поле, сад', views: 0, likes: 0, img: 'https://www.kartinki24.ru/uploads/gallery/main/192/kartinki24_ru_fields_88.jpg'},
            {id: 4, name: 'Шоушенк, по фильму, поле, дерево', views: 0, likes: 0, img: 'https://img.dni.ru/binaries/v3_main/467896.jpg'},
            {id: 5, name: 'Зеленое поле', views: 0, likes: 0, img: 'https://www.rabstol.net/uploads/gallery/main/354/rabstol_net_fields_04.jpg'},
            {id: 6, name: 'Урожай, поле, сад', views: 0, likes: 0, img: 'https://www.kartinki24.ru/uploads/gallery/main/192/kartinki24_ru_fields_88.jpg'},
            {id: 7, name: 'Шоушенк, по фильму, поле, дерево', views: 0, likes: 0, img: 'https://img.dni.ru/binaries/v3_main/467896.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTags(tags) {
        this._tags= tags
    }

    setTypes(types) {
        this._types = types
    }

    setArts(arts) {
        this._arts = arts
    }

    get tags() {
        return this._tags
    }

    get types() {
        return this._types
    }

    get arts() {
        return this._arts
    }
}