import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { FormService } from "../../service";

export const useFormsStore = defineStore("forms",
    () => {
        const state = reactive({
            forms: [],
            loading: false,
            error: null
        });
        const isLoading = computed(() => state.loading);
    
        const getForms = async () => {
            state.loading = true;
            try {
                state.forms = await FormService.getForms();
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const createForm = async (newForms) => {
            state.loading = true;
            try {
                state.forms.push(await FormService.createForm(newForms));
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const updateForm = async (form) => {
            state.loading = true;
            try {
                const index = state.forms.findIndex((s) => s.id === form.id);
                state.forms[index] = await FormService.updateForm(form);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const deleteForm = async (id) => {
            state.loading = true;
            try {
                const index = state.forms.findIndex((s) => s.id === id);
                state.forms.splice(index, 1);
                await FormService.deleteForm(id);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        return {
            state,
            isLoading,
            getForms,
            createForm,
            updateForm,
            deleteForm,
        };
    }
)