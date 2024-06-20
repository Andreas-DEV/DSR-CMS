import { error } from '@sveltejs/kit';

export const actions = {
    updateImage: async ({request, nyheder}) => {
        let data = await request.formData()
        try {
            await nyheder.pb.collection('nyheder').update(nyheder?.id, data)
        } catch(err) {
            console.log('Error: ', err);

            throw error(400, 'Something went wrong updating your image')
        }
    }
}