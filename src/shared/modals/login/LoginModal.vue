<template lang="pug">

wrapper-modal.b-login-modal(
    @close="onClose"
)
    h1 Вход в личный кабинет
    c-button.__button(
        theme="secondary"
    ) Покупатель
    c-button.__button.-dealer(
        theme="ghost"
    ) Авторизированный дилер

    p Войти с помощью
        c-icon(
            size="m"
            name="bento"
        )
        c-icon(
            size="m"
            name="bento"
        )
    c-input.__input(
        size="base"
        placeholder="Ваша почта"
    )
    c-input.__input(
        size="base"
        placeholder="Пароль"
    )

    c-link.__link(
        tag="span"
    ) Забыли пароль?
    c-button.__button.-login Войти
    c-link.__link.-registration(
        tag="span"
    ) Зарегистрироваться

</template>

<script lang="ts" setup>
import {useStore} from '@/shared/hooks/store'

const store = useStore()

const onClose = () => {
    store?.dispatch('modals/closeModal', 'login')
}
</script>

<script lang="ts">
import { Input } from '@/shared/ui/Input'
import Button from '@/shared/ui/Button'
import { Link } from '@/shared/ui/Link'
import { Icon } from '@/shared/ui/Icon'
import { WrapperModal } from '@/shared/modals/wrapper'

export default {
    components: {
        'c-input': Input,
        'c-button': Button,
        'c-link': Link,
        'c-icon': Icon,
        'wrapper-modal': WrapperModal,
    }
}
</script>

<style lang="scss">
.login-modal {
    text-align: center;
    box-sizing: border-box;
    width: toRem(600);
    margin-left: auto;
    margin-right: auto;

    h1 {
        @include fontSize(h2, bold);

        margin-bottom: toRem(20);
    }

    p {
        margin-top: toRem(20);
        margin-bottom: toRem(20);
    }

    &__input {
        & + & {
            margin-top: toRem(16);
        }
    }

    &__input + &__link {
        margin-top: toRem(20);
    }

    &__link {
        font-weight: 500;
    }

    &__button {
        &--dealer {
            margin-left: toRem(12);
        }

        &--login {
            width: toRem(160);
            display: block;
            margin: toRem(12) auto;

        }
    }
}
</style>
