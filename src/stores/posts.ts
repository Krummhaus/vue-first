// Implementation USING PINIA 'npm instll pinia'
import { defineStore } from "pinia"

interface PostsState {
    foo: string
}

export const usePosts = defineStore("posts", {
    state: (): PostsState => ({
        foo: "foo"
    }),

    actions: {
        updateFoo (foo: string) {
            // this.$state.foo = foo
            this.foo = foo // same expression as above
        }
    }
})