<template>
    <div id="optional">
        <div class="optional">
            <div class="optional_wrap">
                <div class="row">
                    <div>
                        <router-link to="/Sclad">
                            <div class="card">
                                <div class="card_body">
                                    <div class="card_title">
                                        <span> Склад</span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span>Статистика</span>
                                </div>
                            </div>
                        </div>
                        <div style="float: right">
                            <div class="b_card">
                                <div class="b_card_title">
                                    <span>Покупка</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Заказы</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span>Расход</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',

    }
</script>
<style lang="scss" scoped>

    .optional {
        &_wrap {

            width: 1200px;
            margin-right: auto;
            margin-left: auto;

            &_row {
                display: flex;
                align-items: center;
                padding: 60px 0;

            }
        }
    }

    .row {

    }

    .card {
        float: left;
        width: 380px;
        border: 1px solid black;
        background: #0069d9;
        border-radius: 20px;
        padding: auto;
        height: 300px;
        margin-left: 30px;
        margin-top: 30px;
        color: white;

        &_img {
            width: 300px;
            height: 200px;
            border-radius: 20px;

            & img {
                width: 100%;
                height: 100%;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                object-fit: cover;
            }
        }

        &_body {
            margin-top: 20px;
        }

        &_title {
            text-align: center;
            font-size: 24px;
            margin: 130px 0;
        }

    }

    .b_card {
        width: 300px;
        height: 650px;
        margin-top: 30px;
        background: green;
        margin-left: 30px;
        border: 1px solid black;
        border-radius: 20px;

        &_img {
            width: 300px;
            height: 400px;

            & img {
                width: 100%;
                height: 100%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }
        }

        &_title {
            text-align: center;
            font-size: 24px;
            margin: 130px 0;
            color: white;
        }
    }
</style>