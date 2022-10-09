import { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../../components/Header';

import Plus from '../../assets/Plus.svg';
import Clipboard from '../../assets/Clipboard.svg';
import Check from '../../assets/Check.svg';
import Checked from '../../assets/Checked.svg';
import Trash from '../../assets/Trash.svg';

import { styles } from './styles';

type TasksProps = {
  id: string;
  name: string;
  checked: boolean;
};

export function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const finishedTotal = useMemo(() => {
    return tasks.reduce(
      (total, task) => (Boolean(task.checked) ? total + 1 : total),
      0
    );
  }, [tasks]);

  function handleTaskAdd() {
    const taskFormatted = {
      id: new Date().getTime().toString(),
      name: task,
      checked: false,
    };

    setTasks((prevState) => [...prevState, taskFormatted]);
    setTask('');
  }

  function handleTaskRemove({ id, name }: TasksProps) {
    Alert.alert('Remover', `Remover task ${name}`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleToggleCheckTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Header />

      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused && { borderColor: '#5E60CE' }]}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          value={task}
          onChangeText={setTask}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapperStatus}>
        <View style={styles.contentStatusDetail}>
          <Text style={styles.statusCreatedText}>Criadas</Text>
          <View style={styles.statusTotal}>
            <Text style={styles.statusTotalText}>{tasks?.length ?? 0}</Text>
          </View>
        </View>

        <View style={styles.contentStatusDetail}>
          <Text style={styles.statusFinishText}>Concluídas</Text>
          <View style={styles.statusTotal}>
            <Text style={styles.statusTotalText}>{finishedTotal}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.taskContent}>
              <TouchableOpacity onPress={() => handleToggleCheckTask(item.id)}>
                {item?.checked ? <Checked /> : <Check />}
              </TouchableOpacity>
              <View style={styles.taskDescription}>
                <Text
                  style={[
                    styles.taskDescriptionText,
                    item.checked && {
                      color: '#808080',
                      textDecorationLine: 'line-through',
                    },
                  ]}
                >
                  {item?.name || 'Sem descrição'}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleTaskRemove(item)}>
                <Trash />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <View style={styles.listEmptyWrapper}>
              <Clipboard />
              <Text style={styles.listEmptyTitleText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptySubTitleText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
