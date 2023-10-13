import Input from '../../common/Input'
import Label from '../../common/Label'
import Select from 'react-select'
import SelectFetching from '../../common/SelectFetching'
import TextArea from '../../common/TextArea'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../common/buttons/Button'
import { EXP, TypeProject } from '../../constants'

function PostJob() {
    return (
        <form>
            <Input label="Tên công việc" />
            <TextArea label="Mô tả công việc" />
            <Input label="Ngân sách tối đa" />
            <div>
                <Label>Hạn chào giá</Label>
                <DatePicker />
            </div>
            <div>
                <Label>Ngày bắt đầu</Label>
                <DatePicker />
            </div>
            <Input haft label="Thời gian dự kiến hoàn thành dự án" />

            <SelectFetching urlOptions="/category/all" placeholder="Lĩnh vực" />
            <SelectFetching
                urlOptions="/skill/all"
                placeholder="Ngôn ngữ lập trình"
            />

            <Select
                className="mt-4"
                placeholder="Kinh nghiệm"
                options={EXP}
                isSearchable={false}
            />

            <Select
                className="mt-4"
                placeholder="Hình thức làm việc"
                options={TypeProject}
                isSearchable={false}
            />

            <div className="mt-4 flex justify-end gap-x-4">
                <Button type="btn-text">Hủy bỏ</Button>
                <Button type="btn-primary" className="rounded-xl">
                    Đăng việc
                </Button>
            </div>
        </form>
    )
}

export default PostJob
