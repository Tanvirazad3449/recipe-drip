import React from 'react'
import { RegularText } from '../atoms/Texts'
import { MediumButton } from '../atoms/Buttons'

function SaveRecipeSection({ saved, handleSave }: any) {
    return (
        <div className="my-4 align-middle">
            <MediumButton
                onClick={handleSave}
                className={`${saved ? "bg-slate-600 hover:bg-slate-500" : "bg-brandColor"} text-white mb-2`}
            >
                {saved ? "Unsave Recipe" : "Save Recipe"}
            </MediumButton>
            <RegularText>
                {saved
                    ? "This recipe is saved to your Collection!"
                    : "Like this recipe? Save it for later!"}
            </RegularText>
        </div>
    )
}

export default SaveRecipeSection