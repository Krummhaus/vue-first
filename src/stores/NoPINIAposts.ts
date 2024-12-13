// Implementation WITHOUT using ..PINIA 'npm instll pinia'..
// aka custom solution
import { reactive, readonly } from "vue"

// ref number, string
// computed
// reactive {}, Map, Set

interface PostsState {
    foo: string
}
 
export class PostsStore {
    #state: PostsState

    constructor () {
        this.#state = reactive<PostsState>({
            foo: 'foo'
        })
    }

    getState () {
        return readonly(this.#state)
    }

    updateFoo (foo: string){
        this.#state.foo = foo
    }
}

const store = new PostsStore()

// store.updateFoo("bar")

// Use functions or inject/provide
export function usePosts () {
    return store 
}