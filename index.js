import {Select} from './select/select.js'
import './select/styles.scss'
const select = new Select('#select',{
    placeholder: 'Choose an item',
    selectedId: '1',
    data:[
        {id : 1, value : 'Vue js'},
        {id : 2, value : 'Angular js'},
        {id : 3, value : 'React'},
        {id : 4, value : 'Nuxt'},
        {id : 5, value : 'Native'},
        {id : 6, value : 'Flatter'},
    ],
    onSelect(item){
        console.log('Selected Item:', item)
    }
})
window.s = select
