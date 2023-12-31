import Main from './Main.svelte'

new Main({
    target: document.body,
    props:{
        pasta: "spaghetti",
        types:{
            sauce: "Tomato",
            cheese: "Mozzarella"
        }
    }
})