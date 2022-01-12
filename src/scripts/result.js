import {ref} from 'vue'

export const result = ref(0)

export function updateResult(res){
    result.value = res;
}