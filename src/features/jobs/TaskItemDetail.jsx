import { UilTimesCircle } from '@iconscout/react-unicons'

import Button from '../../common/buttons/Button'
import Rectangle from '../../ui/Rectangle'
import TitleSection from '../../ui/TitleSection'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Tab from '../../ui/Tab'
import { useState } from 'react'
import MessageTask from './MessageTask'
import DocumentTask from './DocumentTask'

function TaskItemDetail() {
    const [isActive, setIsActive] = useState()
    return (
        <div className="w-[1200px]">
            <header className="my-2 flex items-center justify-between">
                <Rectangle background="bg-sky-500">Đang thực hiện</Rectangle>

                <span>Thời hạn: 01/01/2023</span>
            </header>
            <main className="grid grid-cols-2 gap-x-4">
                <section className="col-span-1 border px-3 py-2">
                    <TitleSection>Thiết kế giao diện</TitleSection>
                    <DescriptionSection align="text-justify">
                        1. Thu thập thông tin: Tìm hiểu về mục tiêu của website,
                        đối tượng khách hàng, lĩnh vực kinh doanh, và các yêu
                        cầu đặc biệt. Bạn nên tiếp xúc với chủ sở hữu dự án hoặc
                        khách hàng để hiểu rõ hơn về sự kỳ vọng của họ. Nghiên
                        cứu thị trường và phân tích đối thủ: Tìm hiểu về các
                        website tương tự đã tồn tại trong lĩnh vực của bạn. Điều
                        này giúp bạn hiểu được xu hướng thiết kế giao diện,
                        những điểm yếu và mạnh của đối thủ, từ đó tìm cách khác
                        biệt và nổi bật. 2. Xác định cấu trúc thông tin: Xác
                        định các phần của website và cách chúng liên kết với
                        nhau. Thiết kế một cấu trúc rõ ràng giúp người dùng dễ
                        dàng tìm thấy thông tin cần thiết. Tạo layout thiết kế:
                        Bắt đầu bằng việc vẽ một số layout thiết kế dựa trên cấu
                        trúc thông tin đã xác định. Sử dụng các công cụ như
                        mockup, wireframe hoặc prototyping để tạo ra các mẫu
                        giao diện đơn giản để khách hàng có thể thấy được cách
                        mà trang web sắp được xây dựng.
                    </DescriptionSection>
                </section>

                <section className="col-span-1 border px-3 py-2">
                    <Tab
                        tabs={[
                            {
                                id: 1,
                                name: 'Thảo luận',
                            },
                            {
                                id: 2,
                                name: 'Tài liệu',
                            },
                        ]}
                        active={isActive}
                        onClick={setIsActive}
                    >
                        {isActive === 1 ? <MessageTask /> : <DocumentTask />}
                    </Tab>
                </section>
            </main>
        </div>
    )
}

export default TaskItemDetail
