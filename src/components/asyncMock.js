
const items = [
    {
        id: 1,
        name: "Nintendo NES",
        price: 350,
        category: "Consolas 8/16/32 bits",
        img: "/imagenes/nes.png",
        stock: 10,
        description: "Consola de 8 bits"
    },
    {
        id: 2,
        name: "Sega Megadrive",
        price: 380,
        category: "Consolas 8/16/32 bits",
        img: "/imagenes/sega-megadrive.png",
        stock: 10,
        description: "Consola de 16 bits"
    },
    {
        id: 3,
        name: "Nintendo 64",
        price: 400,
        category: "Consolas 8/16/32 bits",
        img: "/imagenes/n64.png",
        stock: 10,
        description: "Consola 3d"
    },
    {
        id: 4,
        name: "Gameboy",
        price: 200,
        category: "Consolas portatiles",
        img: "/imagenes/gameboy.png",
        stock: 10,
        description: "Consola portartil pantalla monocromatica"
    },
    {
        id: 5,
        name: "Sega gamegear",
        price: 230,
        category: "Consolas portatiles",
        img: "/imagenes/sega-gamegear.png",
        stock: 10,
        description: "Consola portatil pantalla a color"
    },
    {
        id: 6,
        name: "Gameboy advance",
        price: 250,
        category: "Consolas portatiles",
        img: "/imagenes/gameboy-advance.png",
        stock: 10,
        description: "Consola portatil pantalla a color"
    },
    {
        id: 7,
        name: "Lote 10 juegos",
        price: 300,
        category: "Juegos retro",
        img: "/imagenes/caja-1.png",
        stock: 30,
        description: "Lote de 10 juegos sorpresa"
    },
    {
        id: 8,
        name: "Lote 15 juegos",
        price: 350,
        category: "Juegos retro",
        img: "/imagenes/caja-2.png",
        stock: 30,
        description: "Lote de 15 juegos sorpresa"
    },
    {
        id: 9,
        name: "Lote 20 juegos",
        price: 300,
        category: "Juegos retro",
        img: "/imagenes/caja-3.png",
        stock: 30,
        description: "Lote de 20 juegos sorpresa"
    },
]

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

export const getItemById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id === itemId))
        }, 2000)
    })
}

export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(item => item.category === categoryId))
        }, 2000)
    })
}


