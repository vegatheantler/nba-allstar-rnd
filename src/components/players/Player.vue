<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ player.firstName + ' ' + player.lastName }}
                    <small>(Rating: {{ player.rating  }})</small>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['player']
    }
</script>