import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            <div class="section bright">hello qwik !</div>
        </>
    );
});

// all meta is inject in global head
export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'first qwick',
        },
    ],
    links: [{}],
};
