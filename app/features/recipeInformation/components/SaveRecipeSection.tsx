import React from 'react'
import { RegularText } from '../../../components/ui/Texts'
import { Button } from '../../../components/ui/Button'
interface SaveRecipeSectionProps{
    saved: boolean;
    handleSave: ()=>void;
}
function SaveRecipeSection({ saved, handleSave }: SaveRecipeSectionProps) {
    return (
        <div className="my-4 align-middle">
            <Button
                onClick={handleSave}
                className={`${saved ? "bg-slate-600 hover:bg-slate-500" : "bg-brandColor"} text-white mb-2`}
            >
                {saved ? "Unsave Recipe" : "Save Recipe"}
            </Button>
            <RegularText>
                {saved
                    ? "This recipe is saved to your Profile!"
                    : "Like this recipe? Save it for later!"}
            </RegularText>
        </div>
    )
}

export default SaveRecipeSection