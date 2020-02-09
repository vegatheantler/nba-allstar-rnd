<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">NBA Allstar 2021 Philippines</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="newAllStar">Shuffle</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions({
                randomizePlayers: 'randomizePlayers',
                fetchData: 'loadData'
            }),
            newAllStar() {
                this.randomizePlayers();
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>