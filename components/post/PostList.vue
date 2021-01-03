<template>
<div class="card-group">
        <Post
                :post="post"
                v-for="post in posts"
        
                :key="post.id"
        />
</div>
</template>
<script>
    import Post from "@/components/post/Post"

    export default {
        components: {
            Post
        },
        props: {
           
            posts: {
                required: true,
                type: Array,
            }
        }
    }
</script>
