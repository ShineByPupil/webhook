import { Button, Table, Tag, Space } from 'antd';
import type { TableProps } from 'antd';
import style from './index.module.scss';

interface DataType {
  github: string;
  hook_url: string;
  hook_secret: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '仓库地址',
    dataIndex: 'github',
    key: 'github',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'hook_url',
    dataIndex: 'hook_url',
    key: 'hook_url',
  },
  {
    title: 'hook_secret',
    dataIndex: 'hook_secret',
    key: 'hook_secret',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>删除</a>
      </Space>
    ),
  },
];

const data: DataType[] = [];

const handleAdd = () => {
  console.log(11);
};

export default () => {
  return (
    <>
      <Button.Group className={style['btn-group']}>
        <Button onClick={handleAdd}>新增</Button>
        <Button>修改</Button>
        <Button>删除</Button>
      </Button.Group>

      <Table
        className={style['table']}
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  );
};
