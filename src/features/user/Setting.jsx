import { UilUserSquare } from '@iconscout/react-unicons'

import TitleSection from '../../ui/TitleSection'
import Input from '../../common/Input'
import Select from '../../common/Select'
import UpdateAvatar from './UpdateAvatar'
import DatePicker from 'react-datepicker'
import Label from '../../common/Label'

function UpdateProfile() {
    return (
        <div className="bg-stone-100 p-4">
            <TitleSection icon={UilUserSquare}>Thiết lập hồ sơ</TitleSection>

            <form>
                <UpdateAvatar avatar="https://i.pravatar.cc/150?u=a042581f4e29026awsl" />

                <section>
                    <TitleSection>Thông tin cá nhân</TitleSection>
                    <Input value="John" label="Họ và tên" />
                    <Input
                        type="email"
                        value="johnkhongnon@gmail.com"
                        label="Email"
                    />
                    <Input
                        type="password"
                        label="Thay đổi mật khẩu"
                        placeholder="Nhập mật khẩu mới"
                        haft
                    />
                    <Input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        haft
                    />
                    <Input
                        type="tel"
                        value="0123456789"
                        label="Số điện thoại"
                    />

                    <div className="my-4">
                        <Label>Ngày sinh</Label>
                        <DatePicker selected={new Date('01-01-2001')} />
                    </div>

                    <Input
                        value="Tôi là cử nhân Báo chí và cũng là cử nhân Tâm lý học - Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia thành phố Hồ Chí Minh."
                        label="Giới thiệu bản thân"
                    />

                    <Input value="6969 6969 6969" label="Số tài khoản" />

                    <Input value="Cần Thơ, Việt Nam" label="Địa chỉ" />
                </section>

                <section>
                    <TitleSection>Thông tin năng lực</TitleSection>
                    <Select
                        options={[
                            { id: 1, name: 'Lập trình web' },
                            { id: 2, name: 'Lập trình nhúng' },
                            { id: 3, name: 'Lập trình di động' },
                        ]}
                        label="Chuyên môn"
                    />
                    <Input value="Dưới 1 năm" label="Kinh nghiệm" />
                    <Select
                        options={[
                            { id: 1, name: 'ReactJS' },
                            { id: 2, name: '.NET' },
                            { id: 3, name: 'NodeJS' },
                        ]}
                        label="Kỹ năng"
                    />
                </section>
            </form>
        </div>
    )
}

export default UpdateProfile
