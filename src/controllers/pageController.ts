import { Request, Response } from 'express'

import { Pet } from '../models/pet'

import { createMenuObject } from '../helpers/createMenuObjects'

export const home = (req: Request, res: Response) => {
    res.render('pages/pages', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        allAnimals: Pet.getAll()
    })
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/dogs', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        allDogs: Pet.getFromType('dog')
    })
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/cats', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        allCats: Pet.getFromType('cat')
    })
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/fishes', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        allFishes: Pet.getFromType('fish')
    })
}
