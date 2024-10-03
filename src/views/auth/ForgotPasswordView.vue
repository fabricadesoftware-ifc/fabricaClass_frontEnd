<script setup>
  import {confirmEmailComp, sucessChangeComp, newPasswordComp, verifyCodeComp} from '../../components/templates/large/forgotPasswordComps';
  import { ref } from 'vue';
  const etapa = ref('confirmEmail')
</script>
<template>
  <confirmEmailComp v-if="etapa = 'confirmEmail'"/>
  <verifyCodeComp v-else-if="etapa = 'verifyCode'"/>
  <newPasswordComp v-else-if="etapa = 'newPassword'"/>
  <sucessChangeComp v-else-if="etapa = 'sucess'"/>
</template>