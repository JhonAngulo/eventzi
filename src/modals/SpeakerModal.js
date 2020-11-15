import React, { useEffect, useState } from "react";
import ApiEventzi from '../utils/ApiEventzi'
import SpeakerNewModal from '../modals/SpeakerNewModal'
import EditSpeakerModal from '../modals/EditSpeakerModal'
import Portal from "../components/Portal";
import { MdClose } from "react-icons/md";

const SpeakerModal = ({ speakerClose, title, id }) => {
    const [speakers, setSpeakers] = useState([])
    const [addNewSpeaker, setAddNewSpeaker] = useState(false)
    const [editSpeaker, setEditSpeaker] = useState([])


    useEffect(() => {
        ApiEventzi.getSpeakers(id)
            .then(response => {
                setSpeakers(response.data.data)
            })
    }, [])

    const handleNewSpeaker = () => {
        setAddNewSpeaker(true)
    }

    const handleEditSpeaker = (speaker) => {
        setEditSpeaker([true, speaker])
    }

    const addNewSpeakerClose = () => {
        setAddNewSpeaker(false)
    }

    const editSpeakerClose = () => {
        setEditSpeaker(false)
    }

    let speakerModalInfo = editSpeaker[1]

    return (
        <Portal>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__container-header">
                        <h3>{title}</h3>
                        <button className="modal__container--close" onClick={speakerClose}>
                            <MdClose />
                        </button>
                    </div>

                    {speakers.length === 0
                        ?
                        <>
                            <p>No speaker added</p>
                        </>
                        :
                        speakers.map(speaker => {
                            return (
                                <>
                                    <p key={speaker.id_speaker}>{speaker.fullname}</p>
                                    <button onClick={() => { handleEditSpeaker(speaker) }}>Edit speaker</button>
                                </>
                            )
                        })
                    }
                    <button onClick={() => handleNewSpeaker()}>Add new speaker</button>
                    {addNewSpeaker && (
                        <SpeakerNewModal
                            title='Add new speaker'
                            id={id}
                            addNewSpeakerClose={addNewSpeakerClose}
                        />
                    )}

                    {editSpeaker[0] === true && (
                        <EditSpeakerModal
                            title='Edit Speaker'
                            id={id}
                            editSpeakerClose={editSpeakerClose}
                            speakerModalInfo={speakerModalInfo}
                        />
                    )}

                </div>
            </div>
        </Portal>
    );
};

export default SpeakerModal;