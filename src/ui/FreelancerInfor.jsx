import { useEffect, useState } from 'react'
import Select from 'react-select'
import { Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

import { URL_SERVER, EXP } from '../constants'
import formatKeyObject from '../utils/formatKeyObject'

function FreelancerInfor({ control, errors }) {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        axios
            .get(`${URL_SERVER}/skill/all`)
            .then((res) => {
                const skillFormatted = formatKeyObject(res.data, [
                    { old: 'id', new: 'value' },
                    { old: 'name', new: 'label' },
                ])
                setSkills(skillFormatted)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Controller
                control={control}
                rules={{ required: true }}
                name="experience"
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        placeholder="Kinh nghiệm"
                        value={value}
                        onChange={onChange}
                        options={EXP}
                        isSearchable={false}
                    />
                )}
            />
            {errors.experience && (
                <p className="text-red-500">
                    Vui lòng chọn mức độ kinh nghiệm của bạn.
                </p>
            )}

            <Controller
                control={control}
                rules={{ required: true }}
                name="skills"
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        value={value}
                        onChange={onChange}
                        placeholder="Ngôn ngữ lập trình"
                        options={skills}
                        isMulti
                    />
                )}
            />
            {errors.skills && (
                <p className="text-red-500">
                    Vui lòng chọn ngôn ngữ lập trình của bạn.
                </p>
            )}

            <label className="mr-10">Ngày sinh</label>
            <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        wrapperClassName="border-none mt-4"
                        selected={value}
                        onChange={onChange}
                    />
                )}
            />
            {errors.dateOfBirth && (
                <p className="text-red-500">Vui lòng chọn ngày sinh của bạn.</p>
            )}
        </>
    )
}

export default FreelancerInfor
